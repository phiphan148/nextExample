'use server'/*const signal = new AbortSignal()*/ //Cancel cache in memory
import {revalidatePath, revalidateTag} from "next/cache";


export async function validateCacheFourRoute(path: string) {
    revalidatePath(path)
}
export async function validateCacheFourTag(tag: string) {
    revalidateTag(tag)
}

