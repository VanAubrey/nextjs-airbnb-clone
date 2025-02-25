'use client';

interface MenuItemProps {
  onclick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onclick,
  label
}) => {
  return (
    <div
      onClick={onclick}
      className="w-32 px-3 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
}

export default MenuItem;