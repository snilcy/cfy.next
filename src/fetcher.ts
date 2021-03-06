import { stringify } from '@/services/serializer'
import { log } from '@/services/db/logger'

const fetcher = async ({ url, args }: { url: string; args: any }) => {
  log.debug('fetcher', { url, args })

  const res = await fetch(url, {
    method: 'POST',
    body: stringify(args),
  })

  return res.json()
}

export default fetcher
