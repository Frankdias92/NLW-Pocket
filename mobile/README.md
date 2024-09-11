# Task Manager

This is a simple task management application built with **React Native** and styled using **Gluestack UI** and **NativeWind**. The app allows users to create, delete, and mark tasks as completed, and it provides real-time tracking of the total number of tasks.

<div style="display: flex; with: auto; gap: 16px; justify-content: center">
    <img src="./assets/demoPreview.gif" style="display: flex; height: 850px; border-radius:25px"/>
    <img src="./assets/preview.png" style="display: flex; height: 850px; border-radius:25px"/>
</div>

## Features

- **Add Task**: Allows users to create new tasks.
- **Delete Task**: Users can delete tasks from the list.
- **Mark Task as Completed**: Users can toggle tasks between completed and incomplete.
- **Task Counter**: Real-time tracking of the number of tasks created and completed.

## Technologies Used

- **React Native (0.74.5)**: The framework used for building the mobile app.
- **Expo**: A framework and platform for universal React applications.
- **TypeScript (5.3.3)**: Static typing for improved code reliability.
- **Gluestack UI**: A component library used for building and styling the UI.
- **NativeWind**: Tailwind CSS in React Native for utility-first styling.
- **React Navigation**: Manages navigation within the app, including stacks and screens.

## Releases

You can test the latest version of the app directly from the available release. Follow the steps below to download and run the release:

1. **Download the latest release:**  
   Visit the [releases page](https://github.com/Frankdias92/react-native/releases/tag/v1.0.0) and download the file corresponding to the release you want to test (typically a `.zip` or `.tar.gz` file).

2. **Extract the downloaded file:**
   - On Windows, right-click the file and select "Extract Here" or use a decompression tool.
   - On macOS or Linux, you can use the terminal with the `unzip` or `tar -xzvf` command (depending on the format).

3. **Navigate to the extracted directory:**

    ```bash
    cd path/to/extracted-directory
    ```

4. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

5. **Run the app:**

    ```bash
    npx run start
    ```

To run the app on specific platforms:

```bash
npx run android  # For Android
npx run ios      # For iOS
npx run web      # For Web

## Project Structure

```bash
.
├── src
│   ├── @types
│   │   └── nativewind-env.d.ts       # Type definitions for NativeWind
│   ├── components
│   │   ├── ButtonComponent.tsx       # Reusable button component
│   │   ├── HomeHeader.tsx            # Header for the home screen
│   │   ├── Main.tsx                  # Main logic handling component
│   │   ├── ShowTasks.tsx             # Renders each task in the list
│   │   └── ShowTasksResults.tsx      # Displays task statistics
│   ├── routes
│   │   ├── index.tsx                 # Main navigation logic
│   │   └── app.routes.tsx            # Application route management
│   ├── screens
│   │   └── Home.tsx                  # Main screen where tasks are displayed
├── App.tsx                           # Entry point of the app
├── package.json                      # Project dependencies and scripts
└── README.md                         # Project documentation
```

## Usage

1. Upon launching the app, users can add a new task by entering text into the input field and clicking the **Add** button.
2. Tasks will appear in the list with options to **Mark as Completed** or **Delete**.
3. The header shows the total number of tasks created and completed in real-time.

## Key Libraries and Tools

- **Expo**: Simplifies running and debugging the React Native app across platforms.
- **React Navigation**: Helps manage navigation between different screens.
- **NativeWind**: Tailwind CSS utility-based styling for React Native.
- **Gluestack UI**: Provides UI components and themes.
- **React Native SVG**: Handles rendering of SVG images in the app.
- **Lucide Icons**: Vector icons used in various parts of the app.

## Code Example

Here is an example of how the app handles task management:

```typescript
 const [data, setData] = useState<TasksProps[]>([])
    const [newTask, setNewTask] = useState<string>('')
    const [totalTasksFineshed, setTotalTasksFineshed] = useState<number>(0)

    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return
        }
        setData((prevData) => [...prevData, { 
            id: String(new Date().getTime()), 
            task: newTask, 
            isFinished: false 
        }])
        setNewTask('')
    }

    const handleDeleteTask = (id: string) => {
        setData((prevData) => prevData.filter((item) => item.id !== id))
        const removeTask = data.find((item) => item.id === id)

        if (removeTask?.isFinished) {
            setTotalTasksFineshed((prev) => prev - 1)
        }
    }

    const handleTaskFinished = async (id: string) => {
        setData((prevData) => prevData.map((item) => {
            if (item.id === id) {
                const updateTask = { ...item, isFinished: !item.isFinished }

                setTotalTasksFineshed((prev) => updateTask.isFinished ? prev + 1 : prev - 1)
                return updateTask
            }
            return item
        }) 
        )
    }
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
