import { Bell, ChevronRight, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ActivityDashboardComponent() {
  return (
    (<div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-purple-600">LOOO</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </Button>
            <Avatar>
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">Select an activity or mode to get started.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Mode One', 'Mode Two', 'Mode Three', 'Activity One', 'Activity Two', 'Activity Three'].map((item, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow ${getCardColor(index)}`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="text-white">{item}</span>
                  <ChevronRight className="h-5 w-5 text-white" />
                </CardTitle>
                <CardDescription className="text-white/80">Subheading {index + 1}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-white/20 rounded-md"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Notifications</h3>
          <Card>
            <CardContent className="p-0">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>{notification.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{notification.name}</p>
                      <p className="text-sm text-gray-500">{notification.activity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getBadgeVariant(notification.status)}>{notification.status}</Badge>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

const notifications = [
  { name: "Jane Smith", activity: "Completion of Abc", status: "Excellent", time: "4 min" },
  { name: "John Doe", activity: "Completion of Xyz", status: "Good", time: "2 min" },
  { name: "Jenny Wilson", activity: "Yoga Mudra", status: "Needs Help", time: "1 min" },
]

function getCardColor(index) {
  const colors = ["bg-teal-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-blue-500", "bg-green-500"]
  return colors[index % colors.length]
}

function getBadgeVariant(status) {
  switch (status.toLowerCase()) {
    case 'excellent':
      return 'success'
    case 'good':
      return 'secondary'
    case 'needs help':
      return 'destructive'
    default:
      return 'default'
  }
}