export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-02'

export const dataset = "production"
 
export const projectId = "tsa9n4ne"

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
