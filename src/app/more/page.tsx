import React from 'react';
import { Breadcrumb } from 'flowbite-react';

const Contact = () => (
  <div className="flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
    <h1 className="mb-4 text-center text-3xl font-bold">Contact</h1>
    <p className="text-center">
      You can contact us at <a href="mailto:test@gmail.com" className="text-primary"></a>
    </p>
  </div>
);

const About = () => (
  <div className="flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
    <h1>About Page</h1>
  </div>
);

const Home = () => (
  <div className="flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
    <h1>Home Page</h1>
  </div>
);

const Pricing = () => (
  <div className="flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
    <h1>Pricing Page</h1>
  </div>
);

const selectPageComponent = (pageName) => {
  const pages = {
    Home: <Home />,
    Contact: <Contact />,
    About: <About />,
    Pricing: <Pricing />,
  };

  return pages[pageName] || <div>Page Not Found</div>;
};

export default function More() {
  const [page, setPage] = React.useState('Home');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className="w-full flex-col items-center justify-center rounded-lg bg-slate-800 p-8 text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">{page}</h1>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item onClick={() => setPage('Home')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage('Contact')}>Contact</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage('About')}>About</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setPage('Pricing')}>Pricing</Breadcrumb.Item>
      </Breadcrumb>
      <hr className="my-4" />
      {selectPageComponent(page)}
    </div>
  );
}
