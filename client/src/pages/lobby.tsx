import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";


export function Lobby () {
	const [username, setUsername] = useState("");
	const [roomcode, setRoomcode] = useState("");

    return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<Tabs defaultValue="create">
					<TabsList>
						<TabsTrigger value="create">Create</TabsTrigger>
						<TabsTrigger value="join">Join</TabsTrigger>
					</TabsList>
					<TabsContent value="create">
						<Card className="w-full max-w-2xl">
							<CardHeader>
								<CardTitle>Welcome </CardTitle>
								<CardDescription>
									You can create a room or join one
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col gap-4">
									<div className="grid gap-2">
										<Label htmlFor="name">Enter you name</Label>
										<Input
											id="name"
											type="text"
											placeholder="Enter you name"
										/>
									</div>
									<Button variant={"default"} className="w-full">
									Create
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="join">
						<Card className="w-full max-w-2xl">
							<CardHeader>
								<CardTitle>Welcome </CardTitle>
								<CardDescription>
									You can create a room or join one
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col gap-4">
									<div className="grid gap-2">
										<Label htmlFor="name">Enter you name</Label>
										<Input
											id="name"
											type="text"
											placeholder="Enter you name"
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="roomcode">Enter room code</Label>
										<Input
											id="roomcode"
											type="text"
											placeholder="Enter room code"
										/>
									</div>
									<Button variant={"default"} className="w-full">
									Join
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
        </div>
    )
}