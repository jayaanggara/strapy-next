import { getAllAccount, getSelectedAccount } from "@/api/services";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function SlugPage({ data }) {
  console.log(data)

  return (
    <main
      className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}
    >
        <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
            <Image
                className="relative"
                layout="fill"
                objectFit="cover"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.fullname}
            />
        </div>
      <div className="flex flex-col items-center gap-2 w-full mb-12">
        <h3 className="text-2xl font-bold">{ data.attributes.fullname}</h3>
        <p className="text-lg">{ data.attributes.bio}</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        {data.attributes.links.data.map((value, index) => {
            return (
            <a 
            href={value.attributes.link} 
            target="_blank"
            rel="noopener noreferer"
            key={index} className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
                <div className="flex gap-5 items-center">
                    <Image
                    className="relative"
                    width={50}
                    height={50}
                    objectFit="cover"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${value.attributes.icon.data.attributes.url}`}
                    alt={data.attributes.fullname}
                    />
                    <p>{value.attributes.title}</p>
                </div>

            </a>
            )
        })} 
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const accounts = await getAllAccount();
  const dataAccounts = await accounts.data.data;

  const paths = dataAccounts.map((value) => {
    return {
      params: { slug: value.attributes.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const selectedAccount = await getSelectedAccount(params.slug);

  return {
    props: {
      data: selectedAccount.data.data[0],
    },
    revalidate: 10,
  };
}