export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-02'

export const dataset = "production"
 
export const projectId = "tsa9n4ne"

export const useCdn = false

export const token = "skqFzElQf5BND9oe2YGFXuQ94N3ZDN3bwIZOlQy0Z9EcyK2rYiAylK4Z07hX7rQvoLSXm9mgPU4bd7OPNrGG8eTTtJvLbiM22TOFn8q1Blr2FJwyDYsJPltqqDl7lIGgnE7KDtDtAOXZNka9aJmPcSltsgkcvBBdqHx1t7NSR3JBrvdAswW0"

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
