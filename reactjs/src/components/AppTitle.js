export const AppTitle = props => {
  return (
    <div className="mt-[19px] text-[40px] leading-[40px] tracking-[0.38em] p-0 font-bold text-light-very-light-gray dark:light-very-light-gray">
      {props.children}
    </div>
  );
};
