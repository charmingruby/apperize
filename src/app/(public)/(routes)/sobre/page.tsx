import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { Text } from '@/components/ui/text'

export default function About() {
  return (
    <>
      {/* --- */}
      {/* Hero */}
      <ContainerWrapper>
        <h1>
          Conheça a Apperize, onde as necessidade encontram os melhores
          desenvolvedores.
        </h1>

        <strong>
          nossa missão é modernizar sua empresa de forma acessível.
        </strong>

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam in
          enim laboriosam reiciendis possimus sint blanditiis fugit, pariatur
          tempore, nemo numquam amet deleniti. Quo, nihil ratione nulla eum
          pariatur atque?
        </Text>
      </ContainerWrapper>

      {/* 2 positive topics */}
      <ContainerWrapper>
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
      </ContainerWrapper>

      {/* 2 values */}
      {/* Team */}
      {/* CTA */}
      {/* --- */}
    </>
  )
}
