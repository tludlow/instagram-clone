export const metadata = {
  title: "Page not found",
};

export default function GlobalNotFound() {
  return (
    <div className="w-full text-center">
      <p className="text-2xl font-bold">
        Sorry, this page isn&apos;t available.
      </p>
      <p className="mt-6">
        The link you followed may be broken, or the page may have been removed.
        Go back to Instagram.
      </p>
    </div>
  );
}
