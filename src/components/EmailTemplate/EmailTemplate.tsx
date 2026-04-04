import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
  Row,
  Column,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  email: string;
  phone: string;
};

const EmailTemplate = ({
  firstName,
  lastName,
  subject,
  message,
  email,
  phone,
}: Props) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body
          className="bg-white py-10 font-sans"
          style={{
            fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
          }}
        >
          <Container>
            <Section
              className="max-w-md border border-[#beb9ce] mx-auto rounded-lg p-5"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(255, 255, 255), rgb(244, 241, 255))",
              }}
            >
              <Row className="mb-3">
                <Column align="left">
                  <Row>
                    <Column width={30}>
                      <Img
                        src="https://res.cloudinary.com/dxkd8sigp/image/upload/v1775231961/cube_omptfb.png"
                        width={24}
                        height={24}
                        alt="Cube Icon"
                      />
                    </Column>

                    <Column>
                      <Text className="text-lg font-semibold text-[#592BFF] m-0">
                        Drojas
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>

              <Section className="mb-3">
                <Heading className="text-xl m-0 font-normal text-black">
                  New message from{" "}
                  <span className="font-bold">
                    {firstName} {lastName}
                  </span>
                </Heading>

                <Text className="text-sm text-[#827E90] mb-0 mt-1">
                  You’ve received a new message with subject{" "}
                  <span className="font-semibold text-black">{subject}</span>
                </Text>
              </Section>

              <Row className="mb-3">
                <Column align="left">
                  <Row>
                    <Column width={30}>
                      <Img
                        src="https://res.cloudinary.com/dxkd8sigp/image/upload/v1775231961/mail_xfgpq8.png"
                        width={24}
                        height={24}
                        alt="Cube Icon"
                      />
                    </Column>
                    <Column>
                      <Text className="text-sm pl-3 text-black m-0">
                        {email}
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>

              <Row className="mb-3">
                <Column align="left">
                  <Row>
                    <Column width={30}>
                      <Img
                        src="https://res.cloudinary.com/dxkd8sigp/image/upload/v1775231961/phone_ww6hbg.png"
                        width={24}
                        height={24}
                        alt="Cube Icon"
                      />
                    </Column>
                    <Column>
                      <Text className="text-sm pl-3 text-black m-0">
                        {phone}
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>

              <Section>
                <Text className="text-sm font-normal mb-2 text-[#827E90] m-0">
                  Message
                </Text>
                <Text className="text-sm text-black leading-relaxed whitespace-pre-line mb-0 mt-1">
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default EmailTemplate;
