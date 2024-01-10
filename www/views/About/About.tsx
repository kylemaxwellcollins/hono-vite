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

const About = ({ metadata, content }: Props) => {
  return (
    <Base
      title={metadata.title}
      description={metadata.description}
      template={"about"}
    >
      <div class="about">
        <h1 class="about__title">{metadata.title}</h1>
        <p class="about__description">{content.copy}</p>
      </div>
    </Base>
  );
};

export default About;
