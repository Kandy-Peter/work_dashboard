import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface CardInterface {
  title: string;
  description: string;
  icon: any;
}

const cardHomePage = ({ title, description, icon}: CardInterface) => {
  return (
    <Card className="mt-3 lg:max-w-[45%] text-cyan-900 p-4 rounded-md">
      <CardBody>
        <Typography variant="h6" className="mb-2 flex items-center gap-2">
          {icon}
          {title}
        </Typography>
        <Typography className="text-sm">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default cardHomePage;