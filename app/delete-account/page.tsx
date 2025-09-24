'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DeleteAccount() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleDeleteClick = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address')
      setIsSuccess(false)
      return
    }

    setShowConfirmation(true)
    setMessage('')
  }

  const handleConfirmDelete = async () => {
    setIsLoading(true)
    setShowConfirmation(false)

    try {
      const response = await fetch('https://h38fikktw7.execute-api.us-east-1.amazonaws.com/prod/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('Your account has been successfully deleted.')
        setIsSuccess(true)
        setEmail('')
      } else {
        const errorData = await response.json()
        setMessage(errorData.message || 'Failed to delete account. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Error deleting account:', error)
      setMessage('An error occurred while deleting your account. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancelDelete = () => {
    setShowConfirmation(false)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Delete Account</h1>
                <p className="text-gray-600">
                  This action cannot be undone. All your data will be permanently removed.
                </p>
              </div>

              <form onSubmit={handleDeleteClick} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                  />
                </div>

                {message && (
                  <div className={`p-4 rounded-md ${
                    isSuccess 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    {isLoading ? 'Deleting Account...' : 'Delete My Account'}
                  </button>
                  
                  <a
                    href="/"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    Cancel
                  </a>
                </div>
              </form>

              {/* Confirmation Dialog */}
              {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Confirm Account Deletion</h3>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 mb-4">
                          Are you sure you want to delete the account for <strong>{email}</strong>?
                        </p>
                        
                        <div className="bg-red-50 border border-red-200 rounded-md p-4">
                          <h4 className="text-sm font-medium text-red-800 mb-2">This action will permanently:</h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Delete your profile and all personal data</li>
                            <li>• Remove all your posts and comments</li>
                            <li>• Delete your connections and friend lists</li>
                            <li>• Remove all app preferences and settings</li>
                          </ul>
                          <p className="text-sm text-red-800 font-medium mt-3">
                            This action cannot be undone!
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={handleConfirmDelete}
                          disabled={isLoading}
                          className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                          {isLoading ? 'Deleting...' : 'Yes, Delete Account'}
                        </button>
                        <button
                          onClick={handleCancelDelete}
                          disabled={isLoading}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <h3 className="text-sm font-medium text-yellow-800 mb-2">Before you delete:</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• All your posts and comments will be removed</li>
                  <li>• Your profile and connections will be deleted</li>
                  <li>• This action cannot be undone</li>
                  <li>• You can create a new account anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
