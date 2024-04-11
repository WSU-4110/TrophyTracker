export default function SubHeader(props: { title: string }) {
  return (
    <div className="flex items-center">
      <div className="flex-1 border-t-2 border-gray-200"></div>
      <span className="bg-white px-3 text-2xl text-gray-500">
        {props.title}
      </span>
      <div className="flex-1 border-t-2 border-gray-200"></div>
    </div>
  );
}
