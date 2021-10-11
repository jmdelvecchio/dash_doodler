# Written by Dr Daniel Buscombe, Marda Science LLC
# for the USGS Coastal Change Hazards Program
#
# MIT License
#
# Copyright (c) 2020-2021, Marda Science LLC
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# ##========================================================

# allows loading of functions from the src directory
import sys, os, getopt, shutil
sys.path.insert(1, '../app_files/src')
# from annotations_to_segmentations import *
from image_segmentation import *

from glob import glob
import matplotlib.pyplot as plt
import skimage.io as io
from tqdm import tqdm

from tkinter import Tk
from tkinter.filedialog import askopenfilename, askdirectory
import plotly.express as px
import matplotlib

###===========================================================
try:
    from my_defaults import *
    print("Your session defaults loaded")
except:
    from defaults import *

###===========================================================
def make_jpegs():

    Tk().withdraw() # we don't want a full GUI, so keep the root window from appearing
    direc = askdirectory(title='Select directory of results (annotations)', initialdir=os.getcwd()+os.sep+'results')
    files = sorted(glob(direc+'/*.npz'))

    files = [f for f in files if 'labelgen' not in f]
    files = [f for f in files if '4zoo' not in f]

    #### loop through each file
    for counter, anno_file in tqdm(enumerate(files)):

        # print("Working on %s" % (file))
        print("Working on %s" % (anno_file))
        dat = np.load(anno_file)
        data = dict()
        for k in dat.keys():
            try:
                data[k] = dat[k]
            except:
                pass
        del dat


        try:
            classes = data['classes']
        except:
            print('No classes found in settings! Using defaults of "water" and "land"')
            classes = ['water', 'land']

        NCLASSES  = len(classes)
        class_string = '_'.join([c.strip() for c in classes])

        #Make the original images as jpg
        if 'orig_image' in data.keys():
            im = np.squeeze(data['orig_image'].astype('uint8'))[:,:,:3]
        else:
            im = np.squeeze(data['image'].astype('uint8'))[:,:,:3]

        io.imsave(anno_file.replace('.npz','.jpg'),
                  im, quality=100, chroma_subsampling=False)

        #Make the label as jpg
        l = np.argmax(data['label'],-1).astype('uint8')+1
        nx,ny = l.shape
        lstack = np.zeros((nx,ny,NCLASSES))
        lstack[:,:,:NCLASSES] = (np.arange(NCLASSES) == l[...,None]-1).astype(int) #one-hot encode
        l = np.argmax(lstack,-1).astype('uint8')

        io.imsave(anno_file.replace('.npz','_label.jpg'),
                  l, quality=100, chroma_subsampling=False)


        if 'classes' not in locals():

            try:
                classes = data['classes']
            except:
                Tk().withdraw() # we don't want a full GUI, so keep the root window from appearing
                classfile = askopenfilename(title='Select file containing class (label) names', filetypes=[("Pick classes.txt file","*.txt")])

                with open(classfile) as f:
                    classes = f.readlines()

        class_label_names = [c.strip() for c in classes]

        NUM_LABEL_CLASSES = len(class_label_names)

        if NUM_LABEL_CLASSES<=10:
            class_label_colormap = px.colors.qualitative.G10
        else:
            class_label_colormap = px.colors.qualitative.Light24

        # we can't have fewer colors than classes
        assert NUM_LABEL_CLASSES <= len(class_label_colormap)

        colormap = [
            tuple([fromhex(h[s : s + 2]) for s in range(0, len(h), 2)])
            for h in [c.replace("#", "") for c in class_label_colormap]
        ]

        cmap = matplotlib.colors.ListedColormap(class_label_colormap[:NUM_LABEL_CLASSES+1])
        # cmap2 = matplotlib.colors.ListedColormap(['#000000']+class_label_colormap[:NUM_LABEL_CLASSES])

        #Make an overlay
        plt.imshow(im)
        plt.imshow(l, cmap=cmap, alpha=0.5, vmin=0, vmax=NCLASSES)
        plt.axis('off')
        plt.savefig(anno_file.replace('.npz','_overlay.png'), dpi=200, bbox_inches='tight')

        del im

        plt.close('all')

    #mk directories for labels and images, to make transition to zoo easy
    imdir = os.path.join(direc, 'images')
    ladir = os.path.join(direc, 'labels')
    overdir = os.path.join(direc, 'overlays')

    try:
        os.mkdir(imdir)
        os.mkdir(ladir)
        os.mkdir(overdir)
    except:
        pass

    lafiles = glob(direc+'/*_label.jpg')

    for a_file in lafiles:
        shutil.move(a_file, direc + '/labels')

    imfiles = glob(direc+'/*.jpg')

    for a_file in imfiles:
        shutil.move(a_file, direc + '/images')

    ovfiles = glob(direc+'/*.png')

    for a_file in ovfiles:
        shutil.move(a_file, direc + '/overlays')



###==================================================================
#===============================================================
if __name__ == '__main__':

    argv = sys.argv[1:]
    try:
        opts, args = getopt.getopt(argv,"h:") #m:p:l:")
    except getopt.GetoptError:
        print('======================================')
        print('python gen_images_and_labels_4_zoo.py') #
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('======================================')
            print('Example usage: python gen_images_and_labels_4_zoo.py') #, save mode mode 1 (default, minimal), make plots 0 (no), print labels 0 (no)
            print('======================================')
            sys.exit()
    #ok, dooo it
    make_jpegs()
