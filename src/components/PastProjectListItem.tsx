import type {PropsWithChildren} from "react";
import * as Dialog from '@radix-ui/react-dialog';

interface Props {
  title: string;
  description: string;
  techDetails: string[];
  images?: {
    previewSrc: string;
    src: string;
  }[];
}

export default function PastProjectListItem({
  title,
  description,
  images,
  children,
  techDetails
}: PropsWithChildren<Props>) {
  return (
    <li className="bg-white border dark:border-blue-light border-black/10 dark:bg-blue rounded-[12px] overflow-hidden">
      <div className="dark:bg-blue border-b dark:border-blue-light pr-3 flex items-center justify-between">
        <div className="flex items-center justify-start gap-5">
          <div className="h-[50px] w-[50px] inline-flex items-center justify-center border-r dark:border-r-blue-light">
            {children}
          </div>
          <h3 className="font-semibold text-sm top-px relative">{title}</h3>
        </div>
        {images ? (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                onClick={() => console.log('clickc')}
                className="h-[25px] w-[25px] border inline-flex items-center justify-center rounded-lg text-black/75 dark:border-blue-light dark:text-white/75">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-image">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/25 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow p-6 fixed top-[50%] left-[50%] max-w-[800px] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-xl border bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:bg-blue dark:border-blue-light dark:shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] overflow-auto">
                <h3 className="font-semibold mb-3 text-lg">Preview Images</h3>
                <div className="grid md:grid-cols-3 gap-2 mb-3">
                  {images.map((image, index) => (
                    <a href={image.src} key={index}
                       className="inline-flex items-center justify-center p-1.5 border rounded-md dark:border-blue-light" target="_blank">
                      <img src={image.previewSrc} alt={title} className="h-[150px] w-auto"/>
                    </a>
                  ))}
                </div>
                <span className="text-blue-dark/80 dark:text-white/80 text-xs">
                  Click the images to view them in full size.
                </span>
                <Dialog.Close asChild>
                  <button
                    className="bg-white border absolute top-[10px] right-[10px] inline-flex h-[35px] w-[35px] shadow-xl appearance-none items-center justify-center rounded-full dark:bg-blue dark:border-blue-light dark:shadow-xl"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-x">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ) : undefined}
      </div>
      <div className="px-5 py-5">
        <p className="text-sm text-blue-dark/80 dark:text-white/80">{description}</p>
      </div>
      <div className="p-5 border-t dark:border-blue-light border-black/10">
        <h4 className="mb-1.5 font-semibold text-xs top-px relative">Tech Details</h4>
        {techDetails.map((detail, index) => (
          <p className="text-xs text-blue-dark/80 dark:text-white/80 mb-1.5 last:mb-0" key={index}>
            {detail}
          </p>
        ))}
      </div>
    </li>
  )
}