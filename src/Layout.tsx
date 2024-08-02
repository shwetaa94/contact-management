import Sidebar from './components/sidebar/Sidebar'

const Layout: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
      <div className="w-[100%] flex h-screen">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
  )
}

export default Layout