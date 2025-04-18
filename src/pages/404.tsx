import BaseButtonLink from '~base/BaseButtonLink'

export function Component() {
  return (
    <main className='grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-amber-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl'>Page not found</h1>
        <p className='mt-6 text-base leading-7 text-gray-400'>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <BaseButtonLink to='/'>Go back home</BaseButtonLink>
        </div>
      </div>
    </main>
  )
}

Component.displayName = 'NotFound'
