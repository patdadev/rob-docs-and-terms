import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Page not found</p>
        <Link to="/tos" className="underline">
          Go to Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
