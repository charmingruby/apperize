import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Linkedin } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* --- */}
      {/* Hero */}
      <ContainerWrapper>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-transparent bg-clip-text bg-primary-gradient font-bold text-4xl">
            Conheça a Apperize, onde as necessidade encontram os melhores
            desenvolvedores.
          </h1>

          <strong className="text-font-semibold text-xl">
            Nossa missão é modernizar sua empresa de forma acessível.
          </strong>

          <Text size="md" variant="lowOpacity">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam in
            enim laboriosam reiciendis possimus sint blanditiis fugit, pariatur
            tempore, nemo numquam amet deleniti. Quo, nihil ratione nulla eum
            pariatur atque?
          </Text>
        </div>
      </ContainerWrapper>

      {/* 2 positive topics */}
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        {/* Dedicated team */}
        <div>
          <div>image</div>
          <div>
            <strong>title</strong>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              doloribus, doloremque eum harum eos quidem sed nisi aspernatur in
              cupiditate est ad! Culpa neque porro aperiam, natus exercitationem
              error vitae.
            </small>
          </div>
        </div>

        {/* Wherever you are */}
        <div>
          <div>image</div>
          <div>
            <strong>title</strong>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              doloribus, doloremque eum harum eos quidem sed nisi aspernatur in
              cupiditate est ad! Culpa neque porro aperiam, natus exercitationem
              error vitae.
            </small>
          </div>
        </div>
      </ContainerWrapper>

      {/* 2 values */}
      <section>
        <ContainerWrapper>
          <HeadingWrapper>
            <HeadingAnnotation annotation="Nossos valores" />

            <HeadingContentWrapper>
              <HeadingTitle>O que representamos</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                earum illum sunt, delectus dignissimos quo expedita nesciunt
                cupiditate doloribus? Velit cum eveniet adipisci necessitatibus
                alias voluptatibus accusantium nostrum totam error!
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div className="grid grid-cols-2 gap-12">
            {/* Value 1 */}
            <div>
              <div>image</div>
              <div>
                <strong>value one</strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  adipisci itaque quasi neque impedit cumque molestias pariatur
                  repellendus, est officia quo possimus perspiciatis debitis eum
                  minima quidem enim sed quas.
                </p>
              </div>
            </div>
            {/* Value 2 */}
            <div>
              <div>image</div>
              <div>
                <strong>value one</strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  adipisci itaque quasi neque impedit cumque molestias pariatur
                  repellendus, est officia quo possimus perspiciatis debitis eum
                  minima quidem enim sed quas.
                </p>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </section>

      {/* Team */}
      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingTitle>Nossos time</HeadingTitle>
        </HeadingWrapper>

        <div>
          {/* Person */}
          <div>
            <div>image</div>
            <div>
              <strong>name</strong>
              <small>role</small>
            </div>
            <div>
              <div>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-background-highlight-main border-t border-background-highlight-dark">
        <ContainerWrapper>
          <h2>Quer trabalhar conosco?</h2>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            praesentium reiciendis illum voluptatibus libero amet alias nobis
            itaque, fugiat, eum molestias sit temporibus officiis vero possimus?
            Sed minima laboriosam facere!
          </Text>
          <Button>Contate-nos</Button>
        </ContainerWrapper>
      </section>
      {/* --- */}
    </>
  )
}
