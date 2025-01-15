import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Article = styled.article`
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
`;

export default function Card({ photo, firstName, lastName, role, linkedin, expertise }) {
  return (
    <Article>
      <Image
        src={photo}
        alt={`${firstName} ${lastName}`}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{role}</p>
      <Link href={linkedin}>LinkedIn</Link>
      <p>{expertise}</p>
    </Article>
  );
}
