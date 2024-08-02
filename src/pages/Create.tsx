import ContactCard from '../components/contacts/ContactCard'
import Sidebar from '../components/sidebar/Sidebar'

const Create = () => {
  return (
    <div className="w-[100%] flex h-screen">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <ContactCard  />
      </div>
    </div>
  )
}

export default Create