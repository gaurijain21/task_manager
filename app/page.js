export default function Home() {
  return (
    <div>
      <h1>Welcome to the Task Manager</h1>
      
      <p style="color:red;"><b>This <i>is </i>pargraph 1.</b>
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br></br>
      <p>This is pargraph 2. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>

      <img src="/Downloads/ss.png" alt="screenshot of app" width="104" height="142"></img>

      <p>
        <ul>Features of app:
          <li>managing tasks</li>
          <li>feature 2</li>
          <li>feature 3</li>
        </ul>
        <ol>
          It can be used by:
          <li>students</li>
          <li>parents</li>
          <li>teachers</li>
        </ol>
      </p>
      

      <p>Go to <a href="/tasks">Tasks Page</a></p>
    </div>
  );
}

