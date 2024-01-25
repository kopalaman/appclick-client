import { ThemeToggle } from '../theme-toggle'
import { Button } from '../ui/button'
import { AuthorizedMenu } from './_components/authorized-menu'
import JoinButton from './_components/join-button'
import NavMenu from './_components/nav-menu'

const Navbar = () => {
  const isAuthorized = true
  return (
    <header
      className="bg-background w-full sticky
   top-0 z-50 border-b"
    >
      <div className="px-4 item-center flex space-x-4 sm:justify-between sm:space-x-0 h-16">
        <NavMenu />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="hidden sm:inline-flex">
              {isAuthorized ? <AuthorizedMenu /> : <JoinButton />}
            </div>
            <Button size={'sm'} className="hidden shrink-0  sm:inline-flex">
              Get started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
