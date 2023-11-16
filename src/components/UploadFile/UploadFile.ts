import { Notify } from 'quasar'

export const checkFileSizeAndType = (files: any) => {
  return files.filter((file: any) => {
    if (file.size === 0) {
      Notify.create({
        type: "negative",
        message: 'Arquivo vazio.'
      })
    } else if (file.type !== 'text/plain') {
      Notify.create({
        type: "negative",
        message: 'Formato incorreto de arquivo.'
      })
    } else {
      return file
    }
  })
}
