import Notification from "./Notification.js";
export default function App() {
  return (
    <div>
          <div>
        <h1>Notifications</h1>
        <Notification message="Stray Kids announce World Tour 2024" isRead={true} />
        <Notification message="BangChan's birthday is today! 🎂" isRead={false} />
        <Notification message="Hyunjin is going live! " isRead={false} />
      </div>
  </div>);
}
