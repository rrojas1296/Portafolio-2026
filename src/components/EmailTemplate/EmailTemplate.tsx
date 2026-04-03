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
import BlockIcon from "@/assets/cube.png";
import MailIcon from "@/assets/mail.png";
import PhoneIcon from "@/assets/phone.png";

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
        <Body className="bg-[#f5f5f7] py-10 font-sans">
          <Container className="max-w-md mx-auto">
            <Section className="bg-[#f7f7fb] border border-[#d6d6e7] rounded-2xl p-6">
              {/* Header */}
              <Row>
                <Column>
                  <Img
                    src="https://res.cloudinary.com/dxkd8sigp/image/upload/v1775231961/cube_omptfb.png"
                    width={24}
                    height={24}
                    alt="Cube Icon"
                  />
                </Column>
                <Column>
                  <Text className="text-lg pl-2 font-semibold text-[#6c4cf1]">
                    Drojas
                  </Text>
                </Column>
              </Row>

              {/* Title */}
              <Heading className="text-xl font-medium text-black mb-3">
                New message from{" "}
                <span className="font-semibold">
                  {firstName} {lastName}
                </span>
              </Heading>

              {/* Subtitle */}
              <Text className="text-sm text-gray-500 mb-5">
                You’ve received a new message with subject{" "}
                <span className="font-semibold text-black">{subject}</span>
              </Text>

              {/* Contact Info */}
              <Section className="mb-5 space-y-3">
                <Section className="flex items-center gap-3">
                  <Text className="text-sm text-black">✉️{email}</Text>
                </Section>

                <Section className="flex items-center gap-3">
                  <Text className="text-sm text-black">📞 {phone}</Text>
                </Section>
              </Section>

              {/* Message */}
              <Section>
                <Text className="text-sm font-semibold mb-2 text-black">
                  Message
                </Text>
                <Text className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
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
