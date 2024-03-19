const HomeLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="w-[100vw] min-h-[100vh] fixed">
      <main className="works">
        {children}
      </main>
    </div>
   );
}
 
export default HomeLayout;