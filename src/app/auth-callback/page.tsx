import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  const {isSuccess} = trpc.authCallback.useQuery()

  if (isSuccess)
  {
    router.push(`/${origin}`)
  }
  else{
    router.push('/dashboard')
  }
}

export default Page