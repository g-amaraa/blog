import { Card, Image } from "react-bootstrap";

export default function Intro() {(
  <Card className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="logo.jpg"
      alt="Generic placeholder"
    />
    <Card.Body>
      <h5 className="font-weight-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
      <p className="welcome-text">
        Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн сонирхолтой
        мэдээллүүдийг энэхүү блогоор хүргэж байна.
      </p>
    </Card.Body>
  </Card>
)};
