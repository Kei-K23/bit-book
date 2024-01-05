import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FileUploadProps {
  value?: string;
  onChange: (url?: string) => void;
  endpoint: "imageUpload";
}

// check the type of image
export function checkImageType(fileType?: string) {
  return (
    fileType == "jpeg" ||
    fileType == "jpg" ||
    fileType == "png" ||
    fileType == "gif" ||
    fileType == "svg" ||
    fileType == "raw" ||
    fileType == "webp"
  );
}

const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
  const fileType = value?.split(".").pop()?.toLowerCase();

  if (value && checkImageType(fileType)) {
    return (
      <div className="relative h-[200px] w-full rounded-md">
        <Image
          src={value}
          alt="Upload image"
          fill
          className="w-full rounded-md"
        />
        <Button
          variant={"destructive"}
          size={"icon"}
          className="rounded-full absolute top-0 right-0"
          onClick={() => {
            onChange("");
          }}
        >
          <X />
        </Button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res[0].url);
      }}
      onUploadError={(_error) => {
        toast.error("Could not upload the file! Try again");
      }}
    />
  );
};

export default FileUpload;
