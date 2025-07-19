import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function Lobby () {
    return (
      
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Welcome </CardTitle>
					<CardDescription>
						You can create a room or join one
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div className="grid gap-2">
						<Label htmlFor="roomcode">Enter room code</Label>
						<Input
							id="roomcode"
							type="roomcode"
							placeholder="Enter room code"
							required
						/>
						</div>
						<Button variant={"default"} className="w-full">
						Join
						</Button>
					</div>
				</CardContent>
				<div className="flex items-center justify-center px-6">
					<hr className="flex-grow border-t border-gray-300" />
					<span className="px-4 text-gray-500">or</span>
					<hr className="flex-grow border-t border-gray-300" />
				</div>
				<CardFooter>
					<Button variant="outline" className="w-full">
					Create a room
					</Button>
				</CardFooter>
			</Card>
        </div>
    )
}