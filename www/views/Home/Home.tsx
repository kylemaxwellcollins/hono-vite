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

const Home = ({ metadata, content }: Props) => {
  return (
    <Base
      title={metadata.title}
      description={metadata.description}
      template="home"
    >
      <div class="home">
        <h1 class="home__title">{metadata.title}</h1>
        <p class="home__description">{content.copy}</p>
      </div>
    </Base>
  );
};

export default Home;
