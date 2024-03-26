import Breadcrumbs from "@/comps/Breadcrumbs";

export default async function SpecificUser({
  params,
}: {
  params: { uid: string };
}) {
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-2">User: {params.uid}</h1>
      <Breadcrumbs
        className="mb-6"
        crumbs={[
          { name: "Users", href: "/users" },
          { name: params.uid, href: "#" },
        ]}
      />
      <div className="tt-layout">
        <p>TODO</p>
      </div>
    </div>
  );
}
