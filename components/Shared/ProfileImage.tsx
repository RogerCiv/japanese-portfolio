import Image from "next/image";

type Props = {
  size?: "small" | "medium" | "large";
  className?: string;
  borderColor?: string;
};

export default function ProfileImage({
  size = "medium",
  className = "",
  borderColor = "#B94A48",
}: Props) {
  const sizeClasses = {
    small: "w-12 h-12 border-2",
    medium: "w-32 h-32 border-4",
    large: "w-48 h-48 border-4",
  };

  const imageSizes = {
    small: "48px",
    medium: "128px",
    large: "192px",
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden shadow-lg ${sizeClasses[size]} ${className}`}
      style={{ borderColor, borderStyle: "solid" }}
    >
      <Image
        src="/images/yo.png"
        alt="Foto de perfil"
        fill
        className="object-cover"
        sizes={imageSizes[size]}
      />
    </div>
  );
}