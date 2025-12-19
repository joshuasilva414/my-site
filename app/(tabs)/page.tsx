import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/images/photo.jpeg"
          width={150}
          height={150}
          alt="photo of me"
          className="mr-5 mask-radial-at-center object-cover aspect-square rounded-full float-start wrap-circle"
        />
        <p className="text-right text-lg text-pretty">
          Eu est aliqua ex amet. Eu ut pariatur magna irure dolor ullamco
          exercitation enim qui sint laboris proident commodo aliqua cupidatat.
          Magna occaecat pariatur fugiat do exercitation. Eu duis culpa aliquip
          qui Lorem nulla nostrud quis nostrud ea fugiat. Do do enim enim mollit
          nulla reprehenderit enim cupidatat ea id magna dolore. Irure anim
          cillum enim voluptate culpa laborum ullamco adipisicing ut enim velit
          ut excepteur. Nostrud duis cupidatat laboris cillum mollit esse enim
          in ullamco. Voluptate aliqua sunt Lorem labore sit. Adipisicing ex
          enim culpa eu magna ut Lorem velit tempor veniam. Non occaecat nisi
          commodo labore id enim sit anim. Eiusmod sit occaecat pariatur veniam
          reprehenderit nisi commodo consectetur ipsum laborum cillum excepteur
          aliqua. Ut ipsum adipisicing nulla officia culpa culpa.
        </p>
      </div>
      <div></div>
    </div>
  );
}
