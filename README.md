## **DEXLA WYSIWYG WEB EDITOR SAMPLE**

---

This is a basic online web editor app that can be used to build basic landing page.

This app is built on react + vite and the editable web page is configured with Craftjs.

### **Features**

All are just basic _React Components_ coupled few JavaScript Libraries. The app entails:

1. The Top Bar
2. The Left Bar
3. The Right Bar
4. The Page

**Top Bar**
The top bar is the navigation bar. You can select from a variety options which include: mobile view, tablet view, screen view, preview mode etc.

**Left Bar**
The left bar contain the web elements icon. These elements are <mark>Container</mark> , <mark>Form</mark>, ==Input==, ==Text== and --Button== elements each built as separate React component. A simple _drag-n-drop_ of any of the elements on the webpage creates a html reference of the dropped element.

**Right Bar**
The right bar is the Settings or Customization panel. Any selected item on the webpage can be customized in the settings panel.

Any selected item can be deleted from the settings panel. The delete button exist just right at the bottom of the panel.

**The Page**
The page exist in between the right and left bars. This is the area in which dragged elements are dropped and set up. The page is set up as a non-deletable `main` element with preconfigured settings and represents the droppable region.

### Styling

The styling of the components and layout was done using a syling library called **styled-components**.
To each `.jsx` file, there is a corresponding `.styles.jsx` file in which the styles are setup.

The properties of the editable elements are passed as props to their respective components and utilized in `.styles.jsx` file.

### Libraries

1. **@craftjs/core**: used to set up the editor, frame, canvas and drag-n-drop functionality.
2. **@craftjs/layers**: used to create Layer component that display the nodetree.
3. **fontawesome**: used in setting up icons utilized in the app development.
4. **react-contenteditable**: used to set up editable elements and interact with the node properties.
5. **react-colorful**: used to set up rgba color picker for the text color, backgrounds and borders.
6. **@reduxjs/toolkit**: used to manage necessary states for app functionality.
7. **react-redux**: to connect redux to app.
8. **lzutf8**: used to copy and paste serialized json data.
9. **React-hooks**: useState and useRef are used where necessary.
10. **eslint**+**prettier**+**husky**: to set up syntax linting before pushing to the github repository.

### Steps

- Created a new react app with vite - `yarn create vite`.
- Added necessary dependencies using `yarn add [package]`.
- Set up **eslint**,**prettier** and **husky** for syntax control and error restraint.
- In my terminal, launch app using `yarn dev`.
- created `store.jsx` file, set up initial state values and dispatch actions using `configureStore`\ and `createSlice` from _redux-toolkit_.
- created two folders: _Components_ and _Layers_; the Components folder is the build folder for the\ 'drag-n-drop elements' while the Layers folder controls the user interface.
- Created five folders inside the Components folder: _Button_,_CanvasBox_,_Container_,_Form_,_Input_ and _Text_.
  -- d

### Getting Started

Firstly, make sure you have nodejs (v18.12.0+) installed on your computer.\
You can check your system's node version by:

- Open your window terminal or bash terminal
- Type in the code below:

`node -v`

- If you don't have it installed, you can download it here [node](https://nodejs.org/en/download)

To download project to your computer, follow the steps below:

- Launch your bash terminal
- Then click [here](https://github.com/willhemz/WYSIWG-Editor) to assess the repository.
- Click either the `HTTPS` button or `SSH` button. copy either the `HTTPS CODE` or `SSH CODE`.
- Proceed to your terminal. Go to the directory where you want the project stored.
- Type `git clone`, then paste either the `HTTPS CODE` or `SSH CODE`.\
  Then press `ENTER` key.
- After file is completely downloaded, switch to the project directory by typing:\
  `cd wysiwg-editor`

In the project directory, you can run:

### `yarn install`

Installs the node modules necessary for the project to launch successfully.

Once the node modules has been installed, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
