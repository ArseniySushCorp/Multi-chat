import { MessageContentType } from "@prisma/client"

export type CreateMessageDto = {
  roomId: number
  contentType: typeof MessageContentType.text
  contentData: {
    [MessageContentType.text]: string
  }
}
