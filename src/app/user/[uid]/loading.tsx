import { Spinner } from "flowbite-react";

export default function loading() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <h1>Loading user</h1>
      <Spinner size="xl" />
    </div>
  );
}
