import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
const Page =  () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()
return
    <div>
{user.email}
       </div>

}
export default Page;