import Image from 'next/image';

import Step from './Step';

export default function StepLoading({
  title,
  steps,
  step
}: {
  title: string;
  steps: string[][];
  step: number;
}) {
  return (
    <>
      <h2 className="mb-12 mt-32 text-center text-xl font-bold">{title}</h2>
      <Image className="mx-auto mb-14" src="/imgs/3d-img.png" alt="" width={148} height={148} />
      <div className="m-auto flex w-fit flex-col gap-5">
        {steps[0].map((v, i) => (
          <Step key={v[i]} description={steps[step][i]} isDone={step > i} />
        ))}
      </div>
    </>
  );
}
