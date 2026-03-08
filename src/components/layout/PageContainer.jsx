function PageContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1110px] px-6 md:px-10 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;