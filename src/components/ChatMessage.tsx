import * as React from "react"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

interface TeamMember {
  name: string,
  job: string
  jobShort?: string,
  photo: ImageDataLike,

}

interface ChatMessage {
  message: string,
}

export interface ChatMessageProps {
  teamMember: TeamMember,
  message: ChatMessage,
}

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const {teamMember, message} = props;
  const avatar:IGatsbyImageData | undefined = getImage(teamMember.photo);

  return (
    <div className="uam_chatItem">
      <div className="uam_chatItem_avatar">
        {avatar && <GatsbyImage image={avatar} alt={teamMember.name} as="span" />}
      </div>
      <div className="uam_chatItem_content">
        <small className="uam_chatItem_role">{teamMember.name}, {teamMember.jobShort ? teamMember.jobShort : teamMember.job}</small>
        <p>
          {message.message}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage
