import { Link, Outlet } from 'umi';


export default function Layout() {
  return (
    <div className='nyu-container'>
      <Outlet />
    </div>
  );
}
