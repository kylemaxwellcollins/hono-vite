import Base from "../../components/Base/Base";

interface Metadata {
  title: string;
  description: string;
}

interface Content {
  copy: string;
}

interface Props {
  metadata: Metadata;
  content: Content;
}

const Contact = ({ metadata, content }: Props) => {
  return (
    <Base
      title={metadata.title}
      description={metadata.description}
      template={"contact"}
    >
      <div class="contact">
        <h1 class="contact__title">{metadata.title}</h1>
        <p class="contact__description"> {content.copy}</p>
      </div>
    </Base>
  );
};

export default Contact;
