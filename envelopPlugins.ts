
import { useHive } from '@graphql-hive/client'


const envelopProxy = useHive({
  enabled: true,
  debug: true, // or false
  token: process.env.HIVETOKEN,
  usage: true // or { ... usage options }
})

const getEnveloped = [
  envelopProxy
];

export default getEnveloped