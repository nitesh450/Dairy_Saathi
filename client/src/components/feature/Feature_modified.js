import React from 'react'
import ad from '../../assets/ad.jpg';
import bar from '../../assets/bar.jpg';
import location from '../../assets/location.jpg';
import payment from '../../assets/payment.jpg';
import route from '../../assets/route.jpg';

const FeatureModified = () => {
  return (
    <div className='mx-4 my-10 bg-gray-300 flex flex-col items-center'>
        <h1 className='text-4xl mb-10 text-center'>Feature</h1>

        <div className='flex flex-col items-center gap-8 w-full max-w-2xl'>
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
              <img className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={location} alt="Location track"/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Location track of your delivery boys</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Track the location of your delivery personnel in real-time.</p>
              </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online payments from customers</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Secure and efficient online payment processing for your customers.</p>
              </div>
              <img className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={payment} alt="Online payments"/>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
              <img className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={bar} alt="Graphical review"/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Realtime graphical review of expense, revenue, inventory and other metrics</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Visualize and analyze your business metrics effectively.</p>
              </div>
          </div>
          
          {/* Card 4 */}
          <div className="flex flex-col-reverse md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Advertisement of your brand</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Promote your brand effectively through our platform.</p>
              </div>
              <img className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={ad} alt="Advertisement"/>
          </div>
          
          {/* Card 5 */}
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
              <img className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={route} alt="Delivery Route"/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Route and Distribution Management</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Optimize your delivery routes and distribution processes.</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default FeatureModified
