import { UserButton } from "@clerk/nextjs";

/*export default function Home() {
  return <p>Hello Admin Dashboard</p>;
}*/

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
